export const Contact = () => {
  return (
    <>
      <p className="text-medium-purple-600 font-semibold font-inter">
        What&apos;s your favourite dinosaur?
      </p>
      <h2 className="font-semibold font-raleway text-slate-900 text-5xl">
        Holla
      </h2>
      <p className="font-light font-inter text-slate-500 text-xl">
        I&apos;d love to hear from you. Please fill out this form.
      </p>
      <a href="/pages/success.tsx">TEST LINK</a>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/pages/success.tsx"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
};
