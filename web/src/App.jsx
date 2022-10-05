export default function App() {
  return (
    <div className="h-screen bg-red-700 text-white flex flex-col md:flex-row space-y-6">
  
      <div className="">
        <img src="/img/photo.png" />
      </div>

      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl text-center font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
      
        <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
        Criar minha conta
        </button>

        <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">
        Criar minha conta
        </button>
      </div>
    </div>
  )
}