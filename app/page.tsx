import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <section
        id="home"
        className="flex min-h-screen max-w-4xl pt-40 mx-6 text-muted-foreground"
      >
        <div>
          <h1 className="text-foreground">Jon T Ekern</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
        </div>
        <div>
          <Image
            src="/assets/profile-dark.png"
            alt="My Profile"
            width={800}
            height={800}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      <section
        id="services"
        className="flex min-h-screen max-w-4xl pt-30 mx-6 text-muted-foreground"
      >
        <div>
          <h1 className="text-foreground text-3xl pb-2">Services</h1> <hr />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen max-w-4xl pt-30 mx-6 text-muted-foreground"
      >
        <div>
          <h1 className="text-foreground text-3xl pb-2">Projects</h1> <hr />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi doloribus eaque rem voluptates, quae libero sed impedit.
            Quas aspernatur debitis ea obcaecati cumque non, quam rerum iure
            maiores consequatur veritatis, magni facilis officia accusamus,
            repellat laudantium! Itaque nostrum hic, provident dolorem rem, id
            veniam in perferendis cupiditate repellendus sed.
          </p>
        </div>
      </section>
    </div>
  );
}
