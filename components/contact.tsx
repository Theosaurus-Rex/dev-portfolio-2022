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
      <form name="contact" method="POST" data-netlify="true " action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">Your Name:</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email:</label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
};
