import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Pagenav from "@/components/Pagenav";

const civilAviation = () => {

    return (
        <>
        <Navbar />
        <Pagenav sections={{"sec-1": "Общие сведения", "sec-2": "Общие правила полетов воздушных судов гражданской авиации"}}/>
        <main>
          <div className="container">
            <h1>Гражданская авиация</h1>

            <section id="sec-1">
              <h2>Общие сведения</h2>
              <p><strong>Гражда́нская авиа́ция</strong> (сокр. ГА) — вид авиации, используемой в целях обеспечения потребностей граждан и экономики (перевозка населения и грузов и пр.).</p>
              <p>Гражданская авиация в России подразделяется на 3 сферы: коммерческие воздушные перевозки, авиационные работы и авиацию общего назначения.</p>
              <p>Гражданская авиация используется для обеспечения удовлетворения потребностей граждан. К этим потребностям относятся:</p>
                <ul>
                  <li>перевозка пассажиров, багажа, грузов и почты;</li>
                  <li>выполнение авиационных работ с использованием полётов гражданских воздушных судов в сельском хозяйстве, строительстве, для охраны окружающей среды, оказания медицинской помощи и других целей, перечень которых устанавливается уполномоченным органом в области гражданской авиации;</li>
                  <li>оказание медицинской помощи населению и проведение санитарных мероприятий;</li>
                  <li>проведение экспериментальных и научно-исследовательских работ;</li>
                  <li>проведение учебных, культурно-просветительных и спортивных мероприятий.</li>
                </ul>
              <p>Гражданская авиация базируется на гражданских аэродромах. Основная функционально-производственная единица гражданской авиации — аэропорт.</p>
              <p>Официальное определение гражданской авиации в Воздушном кодексе Российской Федерации от 19.03.1997 № 60-ФЗ (ред. от 08.06.2020).</p>

              <img style={{marginTop: "20px"}} src="sto_let.jpeg" />
              <p style={{marginTop: "5px", fontStyle: "italic"}}>Постер к столетию гражданской авиации (8 февраля 2023г.)</p>
            </section>

            <section id="sec-2" style={{marginBottom: "200px"}}>
              <h2>Общие правила полетов воздушных судов гражданской авиации</h2>
              <ol>
                <li>Воздушное судно, приводимое в движение силовой установкой, уступает путь дирижаблям, планерам, аэростатам, а также воздушным судам, буксирующим другие воздушные суда или какие-либо предметы. Дирижабли уступают путь планерам и аэростатам. Планеры уступают путь аэростатам.</li>
                <li>При одновременном полете (прибытии) по правилам визуальных полетов или визуальном заходе на посадку на неконтролируемый аэродром 2 воздушных судов, находящихся на предпосадочной прямой, преимущество совершить посадку первым имеет воздушное судно, летящее впереди, слева или ниже.</li>
                <li>Положение воздушного судна в вертикальной плоскости определяется уровнем полета и выдерживается экипажем по барометрическому высотомеру.</li>
                <li>При полетах на эшелоне перехода или выше воздушное судно выполняет полет по показаниям высотомера, шкала которого установлена на давление QNE, на этом этапе полета положение воздушного судна в вертикальной плоскости выражается через эшелоны полета.</li>
                <li>При полете вне диспетчерского района или диспетчерской зоны ниже эшелона перехода положение воздушного судна в вертикальной плоскости определяется в величинах абсолютной высоты в футах (в метрах - по запросу) по давлению QNH района.</li>
                <li>Перевод давления на шкале барометрического высотомера с давления аэродрома вылета на давление QNE производится при пересечении высоты перехода. В диспетчерской зоне над двумя и более близко расположенными аэродромами устанавливается общая высота перехода (абсолютная, относительная в зависимости от видов авиации, базирующихся на аэродромах), соответствующие органы обслуживания воздушного движения устанавливают общий эшелон перехода, используемый вблизи этих аэродромов или в надлежащих случаях в соответствующем узловом диспетчерском районе.</li>
                <li>Полеты воздушных судов в переходном слое в режиме горизонтального полета запрещаются.</li>
                <li>Для полета по маршруту на высоте перехода или ниже перевод шкалы давления барометрического высотомера с давления на аэродроме (давление QFE или давление QNH аэродрома) на давление QNH района производится при пересечении границы диспетчерской зоны.</li>
                <li>На неконтролируемом аэродроме (вертодроме, посадочной площадке) взлет производится по давлению QNH аэродрома. При отсутствии информации о давлении QNH аэродрома перед взлетом на высотомере устанавливается высота, соответствующая превышению аэродрома над уровнем моря.</li>
              </ol>

            </section>
          </div>
        </main>
      </>
    )
}

export default civilAviation;