import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO / HOME */}
      <section
        id="home"
        className="flex min-h-screen items-center pt-32"
      >
        <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-6 text-muted-foreground md:flex-row md:items-center">
          {/* Text */}
          <div className="space-y-4 md:w-1/2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Jon T Ekern
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eligendi doloribus eaque rem voluptates, quae libero sed impedit.
              Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
              maiores consequatur veritatis, magni facilis officia accusamus,
              repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
              veniam in perferendis cupiditate repellendus sed.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/assets/profile-dark.png"
              alt="My Profile"
              width={400}
              height={400}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="flex min-h-screen items-center py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
                Services
              </h1>
              <hr className="border-border" />
            </div>

            <div className="space-y-4">
              <p>
                Nordisk Damp & Gass offers professional service, installation,
                and maintenance for a wide range of industrial and commercial
                systems. With solid experience and high technical expertise, we
                help businesses maintain reliable, efficient, and safe
                operations.
              </p>

              <p>
                We specialize in servicing and optimizing{" "}
                <span className="font-medium">laundry facilities</span>,
                including steam units, gas burners, heating systems, and process
                equipment. Our team ensures that machines run smoothly,
                efficiently, and with minimal downtime.
              </p>

              <p>
                We also work with{" "}
                <span className="font-medium">industrial steam systems</span>,
                from maintenance and troubleshooting to system adjustments and
                installation of new components. Proper steam operation is
                critical for many industries, and we make sure your system stays
                safe and stable.
              </p>

              <p>
                For{" "}
                <span className="font-medium">
                  car painting and finishing facilities
                </span>
                , we provide service on ventilation systems, burners, heat
                systems, and safety components to ensure consistent performance
                and compliance with industrial standards.
              </p>

              <p>
                More detailed service descriptions will be added as soon as the
                client provides additional information. Until then, this summary
                reflects the core areas Nordisk Damp & Gass is currently working
                within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex min-h-screen items-center py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
                Projects
              </h1>
              <hr className="border-border" />
            </div>

            <div className="space-y-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eligendi doloribus eaque rem voluptates, quae libero sed
                impedit. Quas aspernatur debitis ea obcaecati cumque non, quam
                rerum iure maiores consequatur veritatis, magni facilis officia
                accusamus, repellat laudantium! Itaque nostrum hic, provident
                dolorem rem, id veniam in perferendis cupiditate repellendus
                sed.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eligendi doloribus eaque rem voluptates, quae libero sed
                impedit. Quas aspernatur debitis ea obcaecati cumque non, quam
                rerum iure maiores consequatur veritatis, magni facilis officia
                accusamus, repellat laudantium! Itaque nostrum hic, provident
                dolorem rem, id veniam in perferendis cupiditate repellendus
                sed.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eligendi doloribus eaque rem voluptates, quae libero sed
                impedit. Quas aspernatur debitis ea obcaecati cumque non, quam
                rerum iure maiores consequatur veritatis, magni facilis officia
                accusamus, repellat laudantium! Itaque nostrum hic, provident
                dolorem rem, id veniam in perferendis cupiditate repellendus
                sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
