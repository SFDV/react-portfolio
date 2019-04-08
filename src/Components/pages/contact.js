import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div class="contact container">
          <h1>Contact Content</h1>
          
          <div class="col-md-8">

            <form class="col-md-8" action="mailto:djvic319@gmail.com" method="post" encType="text/plain">
              <h2>Contact Me</h2>

              <label class="label">Name</label>
              <input type="text" class="form-control" placeholder="Name" name="name" required />
              <br />

              <label class="label">Email</label>
              <input type="email" class="form-control" placeholder="Email" name="email" required />
              <br/>

              <label class="label">Subject</label>
              <input type="text" class="form-control"  placeholder="Subject" name="subject" required />
              <br/>

              <label class="label">Message</label>
              <textarea class="form-control" type="text"  placeholder="Message" name="message" rows="5" required />
              <br/>

              <button type="submit" value="submit">Send</button>
            
            </form>
          
          </div>
        </div>

    );
  }
}

export default Contact;