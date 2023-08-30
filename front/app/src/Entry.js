import axios from "axios";
import React from "react";



const Entry = () =>
{
    const formData = {};

    const fieldChanged = (e) =>
    {
        const {name, value} = e.target;
        formData[name] = value;
    };
    const submit = async (e) => {
        try {
            const response = await axios.post('http://localhost:3001/data/new', formData);
            console.log('Data sent to backend:', response.data);
          } catch (error) {
            console.error('Error sending data:', error);
          }
    };

    return(
        <form onSubmit={submit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={fieldChanged}
          required
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={fieldChanged}
          required
        />
      </label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={fieldChanged}
          required
        />
      </label>
      <label>
        Technologies
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={fieldChanged}
          required
        />
      </label>
      <label>
        Key
        <input
          type="text"
          name="key"
          value={formData.key}
          onChange={fieldChanged}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    )
}
export default Entry;