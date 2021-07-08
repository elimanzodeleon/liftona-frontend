import { useState, useLayoutEffect } from 'react';
import {
  Redirect,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import ProfileNavBar from '../../components/ProfileNavBar';
import WorkoutList from '../../components/WorkoutList';
import UserList from '../../components/UserList';
import { workouts, users } from '../../testData';
import * as s from './styles';

const Profile = () => {
  const { username }: { username: string } = useParams();
  const [uri, setUri] = useState(username);
  const [mainNav, setMainNav] = useState(true);
  const location = useLocation();
  const { url } = useRouteMatch();

  // either uselayouteffect or set loading to true everytime this page is rendered
  // then fetch the users data

  // CONDITIONAL CHECKS FOR DECIDING WHAT TO RENDER
  // 1. if current users profile, links: [posts/likes] action: log out
  // 2. user current user is NOT folowing, links: [posts/likes] action: follow
  // 3. user current user is following, links: [posts/likes] action: unfollow
  // 4. any user visiting following/followers i.e. those terms in url
  // links [following/followers] action: back (return user to profile main page)

  useLayoutEffect(() => {
    // 1. fetch data of curr user with username from DB

    const loc = location.pathname.split('/').pop();
    setUri(loc!);
    setMainNav(true);

    if (loc !== username && loc !== 'likes') {
      setMainNav(false);
    }
  }, [location]);
  return (
    <s.ProfileWrapper>
      <s.HeaderWrapper>
        <s.HeaderDetailsWrapper>
          <s.ProfileAvatar />
          <s.ProfileUsername>{username}</s.ProfileUsername>
          <s.ProfileName>noah st paul</s.ProfileName>
          <s.ProfileInteractionsWrapper>
            <s.ProfileInteractions to={`${url}/following`}>
              <span>110</span>
              following
            </s.ProfileInteractions>
            <s.ProfileInteractions to={`${url}/followers`}>
              <span>8702</span>
              followers
            </s.ProfileInteractions>
          </s.ProfileInteractionsWrapper>
          <s.Hr />
          {/* links: [posts/likes OR following/followers] */}
          {/* action: [follow/unfollow/logout] OR [back] */}
          {/* <ProfileNavbar links={links} action={action}/> */}
          <ProfileNavBar
            mainNav={mainNav}
            setMainNav={setMainNav}
            user={username}
          />
        </s.HeaderDetailsWrapper>
        <s.Hr />
      </s.HeaderWrapper>
      <s.BodyWrapper>
        {uri === username ? (
          <WorkoutList workouts={workouts} />
        ) : uri === 'likes' ? (
          <WorkoutList workouts={workouts} />
        ) : uri === 'following' ? (
          <UserList users={users} />
        ) : (
          <UserList users={users} />
        )}
      </s.BodyWrapper>
    </s.ProfileWrapper>
  );
};

export default Profile;
