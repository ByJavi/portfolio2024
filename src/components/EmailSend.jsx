function EmailSend() {
  return (
    <>
      <div className="relative inline-block  items-center px-8 py-3 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-violet-700"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black dark:bg-violet-300 dark:group-hover:bg-violet-700"></span>
        <span className="relative text-black group-hover:text-white">
          Mensaje Enviado!
        </span>
      </div>
    </>
  )
}

export default EmailSend
