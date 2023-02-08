import styles from './react-button.module.css';

/* eslint-disable-next-line */
export interface ReactButtonProps {}

export function ReactButton(props: ReactButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactButton!</h1>
    </div>
  );
}

export default ReactButton;
