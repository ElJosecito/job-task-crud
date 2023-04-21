export function ContactCard( task ) {
  return (
    <>
      <div className="contact_form__container flex justify-center relative">
        <div className="stats stats-vertical lg:stats-horizontal shadow-lg ">
          <div className="stat flex items-center w-72">
            <div className="avatar flex justify-start items-center">
              <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div>
              <div className="stat-title">Name</div>
              <div className="text-base font-bold">{task.name}</div>
            </div>
          </div>

          <div className="stat w-72">
            <div className="stat-title">Number</div>
            <div className="text-xl font-bold">{`+${task.phone}`}</div>
          </div>

          <div className="stat w-72">
            <div className="stat-title">Description</div>
            <div className="text-base">{task.description}</div>
          </div>
        </div>

        {/* The button to open modal */}
        <label
          htmlFor="my-modal-5"
          className="btn delete_btn z-50 absolute -right-4 -bottom-4 "
          onClick={() => {
            console.log();
          }}
        >
          Delete
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <label htmlFor="my-modal-5" className="modal cursor-pointer">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
              Are You sure about delete this contact?
            </h3>
            <p className="py-4">
              If you delete this contact you won't be able to return this
              action!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Sure!
              </label>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
