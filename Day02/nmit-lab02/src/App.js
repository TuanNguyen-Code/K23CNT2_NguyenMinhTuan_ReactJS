import Nmitinfo from "./nmit-info";

function App() {
  const userInfo = {
    name: "Nguyễn Minh Tuấn",
    id: 2310900114,
    date: '02/04/2005',
    sdt: '0825128529',
    lop: 'K23CNT2'
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Nmitinfo name={userInfo.name} id={userInfo.id} date={userInfo.date} phone={userInfo.sdt} lop={userInfo.lop}/>
    </div>
  );
}

export default App;
