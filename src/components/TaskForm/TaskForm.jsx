import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.text.value.trim() === '') return;
    dispatch(
      addTask({
        id: crypto.randomUUID(),
        completed: false,
        text: form.elements.text.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type='text'
        name='text'
        placeholder='Enter task text...'
      />
      <Button type='submit'>Add task</Button>
    </form>
  );
};