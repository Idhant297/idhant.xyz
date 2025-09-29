import { Callout } from './components/callout'
import Header from './components/header'

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
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <>
      <section className="mb-0">
        <Header />
        <p className="text-4xl font-biro-script mb-3 text-left">yo,</p>
        <p className="mb-0 text-left text-sm">
          {`welcome to this `}<span className="italic font-libre-baskerville">little space</span>{` of mine on the internet.`}
        </p>
      </section>

      <div className="flex gap-8">
        <div className="max-w-2xl">
          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`over the past years, i've spent countless hours understanding, thinking about, and working on beautiful problems in `}<span className="italic font-libre-baskerville">machine learning</span>{`. i'm deeply interested in understanding these systems in a `}<span className="italic font-libre-baskerville">mechanistic</span>{` manner—how their elegant architectures give rise to complex yet beautiful phenomena. i'm also passionate about exploring how these highly capable systems can be applied to real-world problems and how other fields can benefit from this technology.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`currently, `}<span className="italic font-libre-baskerville">researching</span>{` vision-language models, specifically investigating how misalignment emerges broadly across domains when it's only induced in a narrow domain during post-training.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`over the summer, as part of `}<span className="italic font-libre-baskerville">Tzafon</span>{`, i researched reasoning models. i spent my time developing a framework around sampling trajectories from language models to improve their reasoning capabilities. also, contributed to the pre-training regime by helping curate clean, high-quality data for model training.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`in the past, independently researched on interpreting the inner working of mixture of experts (MoEs) for expert specialization and it got `}<a href="https://openreview.net/forum?id=GS4WXncwSF" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">accepted at ICLR '25</a>{`.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`worked with my friends on `}<a href="https://github.com/Idhant297/DenseTeX" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">densetex</a>{` during `}<a href="https://buildspace.so/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">buildspace</a>{`, a fast and accurate image-to-latex model using transformers and CNNs. i also led my university's computer vision team for `}<a href="https://www.robomasterna.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">robomaster</a>{`, a competitive combat robotics tournament, for over a year—where i learned a lot about optimizing systems for resource-constrained environments. additionally, i was part of a research lab at my university where i worked on machine learning algorithms to predict and optimize power consumption in 3d printers.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="mb-4 text-left text-sm leading-relaxed">
              {`i like interacting with new people. if anything from the above interests you, feel free to reach out via `}<a href="https://x.com/Idhant297" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1">twitter</a>{` or `}<a href="mailto:idhant.gulati@gmail.com" className="underline underline-offset-4 decoration-1">email</a>{`.`}
            </p>
          </section>

          <section className="mb-4">
            <p className="text-4xl font-biro-script mb-4 text-left">- idhant</p>
          </section>
        </div>

        <div className="flex-1 flex justify-end items-end">
          <div className="text-right">
          </div>
        </div>
      </div>

      <p className="font-eb-garamond text-3xl text-center">***</p>
    </>
  )
}