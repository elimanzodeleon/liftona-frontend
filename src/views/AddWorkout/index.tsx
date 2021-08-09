import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import Switch from 'react-switch';
import ClipLoader from 'react-spinners/ClipLoader';
import { nanoid } from 'nanoid';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';
import NewWorkoutExerciseList from '../../components/NewWorkoutExerciseList';
import { newWorkoutSchema } from '../../utils/validationSchema';
import { IWorkout, IExercise } from '../../interfaces/index';

const initialFormValues: IWorkout = {
  title: '',
  details: '',
  exercises: [],
};

const initialExerciseValues: IExercise = {
  id: nanoid(),
  name: '',
  sets: '',
  reps: '',
  unilateral: false,
};

const AddWorkout = () => {
  const [exercise, setExercise] = useState(initialExerciseValues);
  const [exercises, setExercises] = useState<any[]>([]);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const { currentUser, getUid } = useAuth();

  const [isBlocking, setIsBlocking] = useState(false);

  // submit new workout handler
  const onSubmit = async (
    values: IWorkout,
    action: FormikHelpers<IWorkout>
  ) => {
    if (exercise.name || exercise.sets || exercise.reps) {
      const answer = window.confirm(
        'You have unsaved changes (current exercise not saved). Are you sure you want to continue?'
      );
      if (!answer) {
        return;
      }
    }

    try {
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/workouts`;
      const uid = getUid();
      const body = {
        ...values,
        uid,
        exercises: exercises.map(exercise => ({
          name: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          unilateral: exercise.unilateral,
        })),
      };
      const data = await axios.post(url, body, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${currentUser}` },
      });
      console.log('response from server: ', data);
      history.push('/home');
    } catch (error) {
      console.log('errr', error.response);
      setError(error.response.data.error.message);
    }
  };

  const handleAddExercise = () => {
    formik.setValues({
      ...formik.values,
      exercises: [...formik.values.exercises, exercise],
    });
    setExercises(prev => [...prev, exercise]);
    setExercise({ ...initialExerciseValues, id: nanoid() });
    setShowAddExercise(prev => !prev);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: newWorkoutSchema,
    onSubmit,
  });

  const addExerciseDisabled =
    !exercise.name ||
    !exercise.sets ||
    exercise.sets < 1 ||
    exercise.sets > 15 ||
    !exercise.reps ||
    exercise.reps < 1 ||
    exercise.sets > 1000;

  const addWorkoutDisabled = !formik.values.title || exercises.length === 0;

  return (
    <s.AddWorkoutWrapper>
      <s.HeaderWrapper>
        <h1>New workout</h1>
        <s.CancelLink to='/home'>Cancel</s.CancelLink>
      </s.HeaderWrapper>

      <s.Hr />
      <s.FormWrapper onSubmit={formik.handleSubmit}>
        {error && <s.Error>{error}</s.Error>}

        <s.WorkoutInput
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          type='text'
          maxLength={50}
          placeholder='Workout Title'
          autoComplete='off'
          error={''}
        />
        <s.WorkoutDetailsInput
          name='details'
          value={formik.values.details}
          onChange={formik.handleChange}
          rows={3}
          placeholder='Add some tips or additional info for this workout...'
        />

        {exercises.length !== 0 && (
          <NewWorkoutExerciseList
            exercises={exercises}
            setExercises={setExercises}
          />
        )}

        {showAddExercise && (
          <s.AddExerciseWrapper>
            <s.ExerciseNameInput
              value={exercise.name}
              onChange={e => setExercise({ ...exercise, name: e.target.value })}
              type='text'
              placeholder='Exercise name'
              maxLength={50}
              error={''}
            />
            <s.ExerciseDetailsWrapper>
              <s.ExerciseSetsInput
                value={exercise.sets}
                onChange={e =>
                  setExercise({ ...exercise, sets: Number(e.target.value) })
                }
                type='number'
                placeholder='Sets'
                min={1}
                max={15}
                error={''}
              />
              <s.ExerciseRepsInput
                value={exercise.reps}
                onChange={e =>
                  setExercise({ ...exercise, reps: Number(e.target.value) })
                }
                type='number'
                placeholder='Reps'
                min={1}
                max={100}
                error={''}
              />
              <s.ExerciseUnilateral>
                <span>each</span>
                <Switch
                  checked={exercise.unilateral}
                  onChange={() =>
                    setExercise({
                      ...exercise,
                      unilateral: !exercise.unilateral,
                    })
                  }
                  onColor='#ddc3fe'
                  onHandleColor='#bb86fc'
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                  activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                  height={10}
                  width={30}
                  className='react-switch'
                  id='material-switch'
                />
              </s.ExerciseUnilateral>

              <s.AddExerciseIconButton
                onClick={handleAddExercise}
                disabled={addExerciseDisabled}
              >
                <s.AddExerciseIcon />
              </s.AddExerciseIconButton>
            </s.ExerciseDetailsWrapper>
          </s.AddExerciseWrapper>
        )}
        <s.AddExerciseButton
          type='button'
          onClick={() => setShowAddExercise(prev => !prev)}
        >
          {showAddExercise ? 'Cancel' : 'Add exercise'}
        </s.AddExerciseButton>
        <s.Hr />
        <s.Postbutton type='submit' disabled={addWorkoutDisabled}>
          {formik.isSubmitting ? (
            <ClipLoader color='#e4e6eb' size={18} />
          ) : (
            'Post'
          )}
        </s.Postbutton>
      </s.FormWrapper>
    </s.AddWorkoutWrapper>
  );
};

export default AddWorkout;
