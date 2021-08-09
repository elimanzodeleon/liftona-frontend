import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
import ProfileNavBar from '../../components/ProfileNavBar';
import WorkoutList from '../../components/WorkoutList';
import UserList from '../../components/UserList';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';
import * as s from './styles';

const Profile = () => {
  const { username }: { username: string } = useParams();
  const [uri, setUri] = useState(username);
  const [mainNav, setMainNav] = useState(true);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { currentUser, getUsername } = useAuth();
  const { state: profileState, dispatch: profileDispatch } = useProfile();
  const { url } = useRouteMatch();

  useLayoutEffect(() => {
    const loc = location.pathname.split('/').pop();
    // console.log('getting data for curr user', loc, uri);
    setUri(loc!);
    setMainNav(true);

    // checking if we are either on (/:username or /:username/likes)
    if (loc !== username && loc !== 'likes') setMainNav(false);

    const fetchUser = async () => {
      try {
        let apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/users/${username}`;
        const {
          data: { user },
        } = await axios.get(apiUrl, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${currentUser}` },
        });
        const payload = {
          uid: user._id,
          username: user.username,
          name: user.name,
          workouts: user.workouts,
          likes: user.likes,
          followers: user.followers,
          following: user.following,
        };
        profileDispatch({ type: 'SET_USER', payload });

        // check if profile belongs to user that is currently signed in
        if (user) setLoading(false);
      } catch (error) {
        console.log(error.response.data.error.message);
      }
    };

    // only fetch data is some action has been performed on users page
    // this way we get the new updated user
    fetchUser();
    // set firstVisit to false and fetch whatever data is requested
    // by checking curr uri
  }, [location]);

  return (
    <s.ProfileWrapper>
      <s.HeaderWrapper>
        <s.HeaderDetailsWrapper>
          <s.ProfileAvatar />
          <s.ProfileUsername>
            {profileState.username ? (
              profileState.username
            ) : (
              <span>&nbsp;&nbsp;</span>
            )}
          </s.ProfileUsername>
          <s.ProfileName>
            {profileState.name ? profileState.name : <span>&nbsp;&nbsp;</span>}
          </s.ProfileName>
          <s.ProfileInteractionsWrapper>
            <s.ProfileInteractions to={`/${username}/following`}>
              {profileState.following !== undefined ? (
                <>
                  <span>{profileState.following.length}</span>
                  following
                </>
              ) : (
                <span>&nbsp;&nbsp;</span>
              )}
            </s.ProfileInteractions>
            <s.ProfileInteractions to={`/${username}/followers`}>
              {profileState.followers !== undefined ? (
                <>
                  <span>{profileState.followers.length}</span>
                  followers
                </>
              ) : (
                <span>&nbsp;&nbsp;</span>
              )}
            </s.ProfileInteractions>
          </s.ProfileInteractionsWrapper>
          <s.Hr />
          {/* links: [posts/likes OR following/followers] */}
          {/* action: [follow/unfollow/logout] OR [back] */}
          {/* <ProfileNavbar links={links} action={action}/> */}
          <ProfileNavBar
            mainNav={mainNav}
            setMainNav={setMainNav}
            user={profileState.username || ''}
            isFollowing={
              getUsername() !== username &&
              profileState.followers?.some(
                user => user.username === getUsername()
              )
            }
          />
        </s.HeaderDetailsWrapper>
        <s.Hr />
      </s.HeaderWrapper>
      {!loading ? (
        <s.BodyWrapper>
          {uri === username ? (
            <WorkoutList workouts={profileState.workouts} />
          ) : uri === 'likes' ? (
            <WorkoutList workouts={profileState.likes} />
          ) : uri === 'following' ? (
            <UserList users={profileState.following!} />
          ) : (
            <UserList users={profileState.followers!} />
          )}
        </s.BodyWrapper>
      ) : null}
    </s.ProfileWrapper>
  );
};

export default Profile;
