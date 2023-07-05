

function App() {

  return (
    <>
      <div className="w-screen h-full  bg-gray-100">
        <div className="h-24 w-screen bg-blue-400 flex justify-center items-center shadow-md  ">
          <h1 className="font-bold text-2xl text-center text-white">Blog  </h1>
        </div> 
        <div id="box-articulos" className="bg-white w-screen  flex justify-center overflow-y-scroll mb-10 items-center flex-col">
          <div id="articulo" className="w-3/5 bg-white h-52 my-8 shadow-md flex rounded">
            <div id="imagen" className="w-2/5 h-full" >
              <img className="object-cover h-full" src="/bg-post.jpg" alt="" />
            </div>
            <div id="desc" className="w-3/5 p-10">
              <p className="text-xl font-bold ">Titulo del articulo</p>
              <p className="font-light">Descripcion</p>
              <button className="w-4/5 h-8 bg-green-500 text-white my-8 font-bold ">ver</button>
            </div>
          </div>
          <div id="articulo" className="w-3/5 bg-white h-52 my-8 shadow-md flex rounded">
            <div id="imagen" className="w-2/5 h-full" >
              <img className="object-cover h-full" src="/bg-post.jpg" alt="" />
            </div>
            <div id="desc" className="w-3/5 p-10">
              <p className="text-xl font-bold ">Titulo del articulo</p>
              <p className="font-light">Descripcion</p>
              <button className="w-4/5 h-8 bg-green-500 text-white my-8 font-bold ">ver</button>
            </div>
          </div>
          <div id="articulo" className="w-3/5 bg-white h-52 my-8 shadow-md flex rounded">
            <div id="imagen" className="w-2/5 h-full" >
              <img className="object-cover h-full" src="/bg-post.jpg" alt="" />
            </div>
            <div id="desc" className="w-3/5 p-10">
              <p className="text-xl font-bold ">Titulo del articulo</p>
              <p className="font-light">Descripcion</p>
              <button className="w-4/5 h-8 bg-green-500 text-white my-8 font-bold ">ver</button>
            </div>
          </div>
          <div id="articulo" className="w-3/5 bg-white h-52 my-8 shadow-md flex rounded">
            <div id="imagen" className="w-2/5 h-full" >
              <img className="object-cover h-full" src="/bg-post.jpg" alt="" />
            </div>
            <div id="desc" className="w-3/5 p-10">
              <p className="text-xl font-bold ">Titulo del articulo</p>
              <p className="font-light">Descripcion</p>
              <button className="w-4/5 h-8 bg-green-500 text-white my-8 font-bold ">ver</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
