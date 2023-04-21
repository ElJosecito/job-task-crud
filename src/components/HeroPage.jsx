

export function HeroPage() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-7xl font-bold">Hello there</h1>
            <p className="py-8 text-1xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="/login">
            <button className="btn btn-primary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
