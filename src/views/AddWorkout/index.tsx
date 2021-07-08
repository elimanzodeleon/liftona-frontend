import { useState } from 'react';
import Switch from 'react-switch';
import { nanoid } from 'nanoid';
import * as s from './styles';
import NewWorkoutExerciseList from '../../components/NewWorkoutExerciseList';
import { useForm } from '../../hooks/useForm';
import { INewWorkoutForm, IExercise } from '../../interfaces/index';
import { validateNewWorkoutForm } from '../../utils/formValidation';

const initialFormState: INewWorkoutForm = {
  title: '',
  description: '',
  exercises: [],
};

const initialExerciseState: IExercise = {
  id: nanoid(),
  name: '',
  sets: '',
  reps: '',
  unilateral: false,
};

const AddWorkout = () => {
  const [exercise, setExercise] = useState(initialExerciseState);
  const [exercises, setExercises] = useState<any[]>([]);
  const [showAddWorkout, setShowAddWorkout] = useState(false);

  const handleAddWorkout = () => {
    console.log('user submitted the following new workout', {
      ...values,
      exercises,
    });
  };

  const handleAddExercise = () => {
    setExercises(prev => [...prev, exercise]);
    setExercise({ ...initialExerciseState, id: nanoid() });
    setShowAddWorkout(prev => !prev);
  };

  const { values, handleChange, handleSubmit, validationError } = useForm(
    handleAddWorkout,
    initialFormState,
    validateNewWorkoutForm
  );

  const addExerciseDisabled =
    !exercise.name ||
    !exercise.sets ||
    exercise.sets < 1 ||
    exercise.sets > 15 ||
    !exercise.reps ||
    exercise.reps < 1 ||
    exercise.sets > 1000;

  const addWorkoutDisabled = !values.title || exercises.length === 0;

  return (
    <s.AddWorkoutWrapper>
      <s.HeaderWrapper>
        <h1>New workout</h1>
        <s.CancelLink to='/home'>Cancel</s.CancelLink>
      </s.HeaderWrapper>

      <s.Hr />
      <s.FormWrapper onSubmit={handleSubmit}>
        <s.WorkoutInput
          name='title'
          value={values.title}
          onChange={handleChange}
          type='text'
          maxLength={50}
          placeholder='Workout Title'
        />
        <s.WorkoutDetailsInput
          name='description'
          value={values.description}
          onChange={handleChange}
          rows={2}
          placeholder='Add some tips or additional info for this workout...'
        />

        {exercises.length !== 0 && (
          <NewWorkoutExerciseList
            exercises={exercises}
            setExercises={setExercises}
          />
        )}

        {showAddWorkout && (
          <s.AddExerciseWrapper>
            <s.ExerciseNameInput
              value={exercise.name}
              onChange={e => setExercise({ ...exercise, name: e.target.value })}
              type='text'
              placeholder='Exercise name'
              maxLength={50}
            />
            <s.ExerciseSetsInput
              value={exercise.sets}
              onChange={e =>
                setExercise({ ...exercise, sets: Number(e.target.value) })
              }
              type='number'
              placeholder='Sets'
              min={1}
              max={15}
            />
            <s.ExerciseRepsInput
              value={exercise.reps}
              onChange={e =>
                setExercise({ ...exercise, reps: Number(e.target.value) })
              }
              type='number'
              placeholder='Reps'
              min={1}
              max={1000}
            />
            <s.ExerciseUnilateral>
              <span>each</span>
              <Switch
                checked={exercise.unilateral}
                onChange={() =>
                  setExercise({ ...exercise, unilateral: !exercise.unilateral })
                }
                onColor='#ddc3fe'
                onHandleColor='#bb86fc'
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                height={15}
                width={36}
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
          </s.AddExerciseWrapper>
        )}
        <s.AddExerciseButton
          type='button'
          onClick={() => setShowAddWorkout(prev => !prev)}
        >
          {showAddWorkout ? 'Cancel' : 'Add exercise'}
        </s.AddExerciseButton>
        <s.Hr />
        <s.Postbutton type='submit' disabled={addWorkoutDisabled}>
          Post
        </s.Postbutton>
      </s.FormWrapper>
    </s.AddWorkoutWrapper>
  );
};

export default AddWorkout;
