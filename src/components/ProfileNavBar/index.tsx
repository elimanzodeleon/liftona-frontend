import React from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import * as s from './styles';
import LogoutButton from '../../components/LogoutButton';
import { useAuth } from '../../hooks/useAuth';

const ProfileNavBar = ({
  mainNav,
  setMainNav,
  user,
  isFollowing,
}: {
  mainNav: boolean;
  setMainNav: any;
  user: any;
  isFollowing: Boolean | undefined;
}) => {
  if (!mainNav) {
    // need to pass user which includes follows/followers/likes and username
    // return <SecondaryNav />;
    return <SecondaryNav user={user} setMainNav={setMainNav} />;
  }
  return (
    <PrimaryNav user={user} setMainNav={setMainNav} isFollowing={isFollowing} />
  );
};

const PrimaryNav = ({
  setMainNav,
  user,
  isFollowing,
}: {
  setMainNav: (prev: boolean) => void;
  user: any;
  isFollowing: Boolean | undefined;
}) => {
  const { getUsername } = useAuth();
  return (
    <s.NavWrapper>
      <s.NavLinks>
        <s.Link
          to={`/${user}`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === user
          }
          onClick={() => setMainNav(true)}
        >
          Posts
        </s.Link>
        <s.Link
          to={`/${user}/likes`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === 'likes'
          }
          onClick={() => setMainNav(true)}
        >
          Likes
        </s.Link>
      </s.NavLinks>
      {getUsername() === user ? (
        <LogoutButton />
      ) : isFollowing ? (
        <s.UnfollowButton />
      ) : (
        <s.FollowButton>Follow</s.FollowButton>
      )}
    </s.NavWrapper>
  );
};

const SecondaryNav = ({ setMainNav, user }: { setMainNav: any; user: any }) => {
  const history = useHistory();
  const handleGoBack = () => {
    setMainNav(true);
    history.push(`/${user}`);
  };

  return (
    <s.NavWrapper>
      <s.NavLinks>
        <s.Link
          to={`/${user}/following`}
          activeStyle={{ color: '#bb86fc', borderBottom: '1px solid #bb86fc' }}
          isActive={(match, location) =>
            location.pathname.split('/').pop() === 'following'
          }
          // onClick={() => setMainNav(false)}
        >
          Following
        </s.Link>
        <s.Link
          to={`/${user}/followers`}
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
