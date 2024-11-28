
export default function Page() {
  return (
    <>
      <section>
        <div className="flex items-center mb-8"> {/* Changed items-start to items-center */}
          <h1 className="text-4xl font tracking-tighter font-eb-garamond flex-grow">
            idhant gulati
          </h1>
          <img
            src="/image/idhant.jpeg"
            alt="idhant gulati"
            className="w-32 h-32 rounded-lg ml-auto" // Increased size
          />
        </div>
        <p className="mb-4 text-left">
          {`hey, i'm majoring in cs at penn state. i like making machines learn and studying 
          the intricacies of how it works. i also enjoy building cool application based stuff
          using machine learning. on the side, i also find it fun working with robots.`}
        </p>
      </section>
      <section>
        <p className="mb-4 text-left">
          {`stuff i'm currently working on / have worked on:`}
        </p>
        <ul className="list-disc pl-5">
          <li>researching on mixture of experts (MoEs), interpreting the inner working of these models. also, aiming for extreme domain specialisation in these models. </li>
          <li>developing a machine learning model to predict the power usage of 3d printers for digital twin framework for a research lab.</li>
          <li>building computer vision algorith for fully autonomous combat robots for robomaster north america university league team at RoboX club (penn state).  </li>
          <li>developed DenseTEX, a machine learning model to convert mathematical equation images into LaTeX. implemented encoder using DenseNet-169 and integrated gpt-style decoder.</li>
          <li>and more ...</li>
        </ul>
      </section>

      <section>
        <p className="mb-4 text-left">
          {``}
        </p>
        <p className="mb-4 text-left">
          {`feel feel to reach to out!`}
        </p>
      </section>

    </>
  )
}