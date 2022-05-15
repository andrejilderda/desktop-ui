import styles from './react-components-button.module.css';

/* eslint-disable-next-line */
export interface ReactComponentsButtonProps {}

export function ReactComponentsButton(props: ReactComponentsButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactComponentsButton!</h1>
    </div>
  );
}

export default ReactComponentsButton;
