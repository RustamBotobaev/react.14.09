import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.css';

class FormMessage extends Component {
  state = {
    author: 'User',
    message: '',
  };

  ref = createRef();

  onSubmit = e => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    const { message } = this.state;

    if (message.length > 0) {
      const { addMessage } = this.props;
      addMessage(this.state);

      this.setState(() => ({
        message: '',
      }));

      this.ref.current.focus();
    }
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  textAreaSend = event => {
    if (event.which === 13) {
      event.target.form.dispatchEvent(new Event('submit', { cancelable: true }));
      event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
  };

  render() {
    const { message } = this.state;
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <button className={styles.form__button} type="button">
          <svg
            width="30"
            height="30"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paperclip"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"
            />
          </svg>
        </button>
        <textarea
          onKeyPress={this.textAreaSend}
          className={styles.form__textarea}
          name="message"
          onChange={this.onChange}
          value={message}
          ref={this.ref}
          id="message"
          placeholder="Написать сообщение..."
        />
        <button className={styles.form__button} type="submit">
          <svg
            width="30"
            height="30"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="comment"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
            />
          </svg>
        </button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;
