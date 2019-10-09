import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { searchGithubProfiles } from 'actions';

// Utilis
import { githubAPI } from 'utils';

// Images
import searchLoaderSrc from 'img/search_loader.gif';
import avatar from 'img/avatar.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', searchLoader: false, profiles: [] };

    this.debounceSearch = _.debounce(this.debounceSearch.bind(this), 250);
  }

  cacheProfiles = profiles => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
    localStorage.setItem('expiresIn', Date.now() + 3600 * 1000);
  };

  async debounceSearch(value) {
    if (value.length >= 2) {
      await this.setState({ searchLoader: true });
      const { items } = await this.props.searchGithubProfiles(value);
      const userProfiles = await Promise.all(
        items.map(async p => {
          const user = await githubAPI.getProfileDetails(p.login);
          return user;
        })
      );
      this.cacheProfiles(userProfiles);
      this.setState({ profiles: userProfiles, searchLoader: false });
    }
  }

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ searchTerm: value });
    this.debounceSearch(value);
  };

  renderProfiles = profiles => {
    return profiles.map(u => {
      return (
        <li key={u.id}>
          <img src={u.avatar_url ? u.avatar_url : avatar} alt="avatar" />
          <div className="profile-info">
            <div className="username">{u.name ? u.name : 'Not found'}</div>
            <div className="location">Location: {u.location ? u.location : 'Not found'}</div>
            <div className="biography">Bio: {u.bio ? u.bio : 'Not found'}</div>
          </div>
        </li>
      );
    });
  };

  checkCachedDataValidity = () => {
    const expiresIn = JSON.parse(localStorage.getItem('expiresIn'));
    const now = Date.now();

    if (now >= expiresIn) {
      localStorage.removeItem('profiles');
      localStorage.removeItem('expiresIn');
    } else {
      const profiles = JSON.parse(localStorage.getItem('profiles'));
      if (profiles && profiles.length) this.setState({ profiles });
    }
  };

  componentDidMount() {
    this.checkCachedDataValidity();
  }

  render() {
    const { searchLoader, profiles } = this.state;
    return (
      <div className="github-finder">
        <header className="search-github-header">
          <div className="search">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <div className="search-div">
              <input onChange={this.handleOnChange} value={this.state.searchTerm} placeholder="Search user..." />
              {searchLoader && <img className="search-loader" src={searchLoaderSrc} alt="places loader" />}
            </div>
          </div>
        </header>
        {profiles.length !== 0 ? (
          <div className="github-users">
            <h2>Github Users</h2>
            <ul className="profile-list">{this.renderProfiles(profiles)}</ul>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 20 }}>No Users Found</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ github }) {
  return {
    profiles: github.profiles,
  };
}

export default connect(
  mapStateToProps,
  { searchGithubProfiles }
)(Home);
