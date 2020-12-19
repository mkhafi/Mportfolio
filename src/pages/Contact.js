import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <form action="">
        <label for="fname">Nom</label>
        <input type="text" id="fname" name="firstname" />

        <label for="lname">Email</label>
        <input type="text" id="lname" name="lastname" />

        <label for="subject">Sujet</label>
        <textarea id="subject" name="subject" style="height: 200px"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
