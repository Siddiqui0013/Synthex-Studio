export default function Video() {
  return (
      <div
      style={{
        backgroundImage: "url('/images/oval.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative p-12 w-full px-6 pt-8 flex flex-col items-center ">
        <iframe
            className="h-[500px] w-full md:w-[700px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/9jKk6ZsZjJ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
    </div>
  )
}
