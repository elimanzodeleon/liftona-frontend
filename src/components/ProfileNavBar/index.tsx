import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as s from './styles';
import LogoutButton from '../../components/LogoutButton';

const ProfileNavBar = ({
  mainNav,
  setMainNav,
  user,
}: {
  mainNav: boolean;
  setMainNav: any;
  user: any;
}) => {
  const { url } = useRouteMatch();
  if (!mainNav) {
    // need to pass user which includes follows/followers/likes and username
    // return <SecondaryNav />;
    return <SecondaryNav url={url} user={user} setMainNav={setMainNav} />;
  }
  return <PrimaryNav url={url} user={user} setMainNav={setMainNav} />;
};
console.log('user navbar rendered');

const PrimaryNav = ({
  setMainNav,
  user,
  url,
}: {
  setMainNav: any;
  user: any;
  url: any;
}) => {
  return (
    <s.NavWrapper>
      <s.NavLinks>
        <s.Link
          to={`${url}`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === user
          }
          onClick={() => setMainNav(true)}
        >
          Posts
        </s.Link>
        <s.Link
          to={`${url}/likes`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === 'likes'
          }
          onClick={() => setMainNav(true)}
        >
          Likes
        </s.Link>
      </s.NavLinks>
      {/* {currentUser.username === user ? <LogoutButton />} : user in currentuser.following ? unfollowbutton : followbutton} */}
      <LogoutButton />
      {/* <s.FollowButton>Follow</s.FollowButton> */}
      {/* <s.UnfollowButton></s.UnfollowButton> */}
    </s.NavWrapper>
  );
};

const SecondaryNav = ({
  setMainNav,
  user,
  url,
}: {
  setMainNav: any;
  user: any;
  url: any;
}) => {
  const history = useHistory();
  const handleGoBack = () => {
    setMainNav(true);
    history.push(`/${user}`);
  };

  return (
    <s.NavWrapper>
      <s.NavLinks>
        <s.Link
          to={`${url}/following`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === 'following'
          }
          // onClick={() => setMainNav(false)}
        >
          Following
        </s.Link>
        <s.Link
          to={`${url}/followers`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === 'followers'
          }
          // onClick={() => setMainNav(false)}
        >
          Followers
        </s.Link>
      </s.NavLinks>
      <s.GoBackButton onClick={handleGoBack}>Back</s.GoBackButton>
    </s.NavWrapper>
  );
};

export default ProfileNavBar;
