export const Contact = () => {
  return (
    <div className="py-20 px-10 flex flex-col items-center">
      <div className="py-20 flex flex-col space-y-10 items-center">
        <p className="text-medium-purple-600 font-semibold font-inter">
          What&apos;s your favourite dinosaur?
        </p>
        <h2 className="font-semibold font-raleway text-slate-900 text-5xl">
          Holla
        </h2>
        <p className="font-light font-inter text-slate-500 text-xl">
          I&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        className="px-10 flex flex-col bg-medium-purple-200 bg-opacity-50 md:px-20 py-10 rounded-lg space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname" className="text-sm">
            Your Name:
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            id="yourname"
            className="py-3 px-4 block w-full shadow-md focus:ring-medium-purple-500 focus:medium-purple-500 rounded-md"
            required
          />
        </p>
        <p>
          <label htmlFor="youremail" className="text-sm">
            Your Email:
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id="youremail"
            className="py-3 px-4 block w-full shadow-md focus:ring-medium-purple-500 focus:medium-purple-500 rounded-md"
            required
          />
        </p>
        <p>
          <label htmlFor="favedino" className="text-sm">
            Favourite Dinosaur:
          </label>{" "}
          <br />
          <input
            type="text"
            name="favedino"
            id="favedino"
            className="py-3 px-4 block w-full shadow-md focus:ring-medium-purple-500 focus:medium-purple-500 rounded-md"
            required
          />
        </p>
        <p>
          <label htmlFor="yourmessage" className="text-sm">
            Message:
          </label>{" "}
          <br />
          <textarea
            name="message"
            id="yourmessage"
            className="py-3 px-4 block w-full shadow-md focus:ring-medium-purple-500 focus:medium-purple-500 rounded-md"
            required
          ></textarea>
        </p>
        <p className="self-center">
          <button
            type="submit"
            className="font-inter bg-medium-purple-600 hover:bg-medium-purple-700 text-white px-4 py-2 rounded-md w-fit"
          >
            Send Message
          </button>
        </p>
      </form>
    </div>
  );
};
