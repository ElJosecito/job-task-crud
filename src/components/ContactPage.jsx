import { Header } from "./Header";
import { ContactCard } from "./ContactCard";



export function ContactPage({tasks}) {


  if (tasks.length === 0) {
    return (
      <>
        <h1>No hay tareas</h1>
      </>
    );
  }


return (
  <>
   <Header />

<section className="contacts_section flex justify-center items-center flex-col">
  <div className="add_container">
    <h2 className="text-4xl font-bold mb-3">Add contact</h2>

    <label htmlFor="my-modal-4" className="btn add_btn">
      ADD
    </label>

    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <div className="form_container">
          <form action="submit">
            <input type="file" className="file-input w-full" />

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type name here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="Number"
                placeholder="Type number here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full flex justify-between items-end">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 w-80"
                  placeholder="Place description of your person "
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
      </label>
    </label>
  </div>
  <div className="contacts_container flex flex-col items-center gap-7 pt-3">

  {tasks.map((task) => (
        <ContactCard key={task.contacts.id} name={task.contacts.name} phone={task.contacts.phone} description={task.contacts.description}/>
      ))}


  </div>
</section>

</>
)
}
