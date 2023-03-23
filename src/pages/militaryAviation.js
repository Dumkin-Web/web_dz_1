import Navbar from "@/components/Navbar";
import Pagenav from "@/components/Pagenav";

const militaryAviation = () => {

    return (
        <>
        <Navbar />
        <Pagenav />
        <main>
          <div className="container">
            <h1>Военная авиация</h1>
            <iframe src="https://aviation21.ru/sostav-boevogo-aviaparka-vks-rossii-na-2020-god/" width="100%" height="900px" align="left">
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
          </div>
        </main>
      </>
    )
}

export default militaryAviation;