import { Callout } from './components/callout'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

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
        <Callout>
          🌁 currently in sf / berkeley!{' '}
          <a 
            href="https://x.com/Idhant297" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-neutral-600 dark:text-neutral-300 transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
          >
            <span className="mt"><ArrowIcon /></span>
            <span className="ml-1">dm</span>
          </a>{' '}
          me if you'd like to meet up!
        </Callout>
        <p className="text-3xl font-biro-script mb-4 text-left">yo,</p>
        <p className="mb-4 text-left">
          {`welcome to this little space of mine on the internet.`}
        </p>
      </section>

      <section>
        <p className="mb-4 text-left">
          {`i'm majoring in cs at penn state. i find it fun making machines learn and studying 
          the intricacies of how it works. i also like building cool stuff
          using machine learning. on the side, i also enjoy working with robots.`}
        </p>
      </section>

      <section>
        <p className="mb-4 text-left">
          {`stuff i'm currently working on / have worked on in the past:`}
        </p>
        <ul className="list-disc pl-5">
          <li>researching on mixture of experts (MoEs), interpreting the inner working of these models. also, aiming for extreme domain specialisation in these models. </li>
          <li>developing a machine learning model to predict the power usage of 3d printers contrinuting towards a digital twin framework for a research lab.</li>
          <li>building computer vision algorithm for fully autonomous combat robot for robomaster north america university league team at RoboX club (penn state).  </li>
          <li>developed DenseTEX, a machine learning model to convert mathematical equation images into LaTeX. implemented encoder using DenseNet-169 and integrated gpt-style decoder.</li>
          <li>and more ...</li>
        </ul>
      </section>

      <section>
        <p className="mb-4 text-left">
          {``}
        </p>
        <p className="mb-4 text-left">
          {`feel free to reach to out!`}
        </p>

        <p className="text-3xl font-biro-script mb-4 text-left">-idhant</p>
      </section>

      <p className="font-eb-garamond text-3xl text-center">***</p>
    </>
  )
}