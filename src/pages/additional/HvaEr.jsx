import Layout from "../../components/shared/Layout";
import { Link } from "react-router-dom";
import PolitietLogo from "../../assets/img/politiet-logo.jpeg";

export default function HvaEr() {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="min-h-[30rem] flex flex-col mt-14 gap-5">
          <h1 className="text-h1 mb-1">En webapp med hensikt...</h1>
          <p className="text-p">
            Sed finibus quam quam, eu aliquet risus faucibus sed. Nam risus
            dolor, aliquet eu urna ut, laoreet laoreet ligula. Integer gravida
            iaculis odio, ac placerat erat vehicula eget. Mauris eget tincidunt
            ligula, sit amet mattis diam. Cras consequat tristique ante. Donec
            ut dui eu nulla rhoncus vulputate eu vitae nibh. Mauris ac risus
            magna. Integer id auctor massa. Mauris ultricies felis eu congue
            eleifend. Nulla et ultricies eros. Morbi urna purus, commodo sit
            amet nisi quis, semper accumsan quam. Nam eu massa eu lectus dapibus
            dignissim. Integer dignissim sagittis facilisis. Proin et congue
            nunc. Suspendisse ultrices, nisi efficitur pulvinar porttitor, dolor
            diam cursus quam, at commodo mauris tortor eleifend erat. Morbi
            luctus commodo ante non egestas.
            <br></br>
            <br></br>
          </p>
          <h3 className="text-h4">Utviklet i norge, for norge.</h3>
          <p className="text-p mb-5">
            Nullam eget nunc mauris. Quisque non risus eu mauris auctor
            interdum. Cras id sollicitudin ipsum. Sed sed nunc congue, posuere
            sem a, dapibus ipsum. Aliquam erat volutpat. Maecenas feugiat eros
            id elit dapibus blandit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Etiam et
            lorem quam. Ut rutrum, ante cursus luctus convallis, velit odio
            pharetra arcu, id pellentesque risus orci in magna. Phasellus at
            condimentum arcu. Curabitur eros risus, vulputate sit amet pulvinar
            at, fringilla molestie est. Praesent sed fermentum lacus.
            Suspendisse eget urna arcu. Vestibulum ut ornare arcu, tempus
            sagittis nunc.
          </p>
          <h5 className="text-h5 font-bold">
            I samarbeid med Politiets IT-Enhet
          </h5>
          <a target="_blank" href="https://www.politiet.no">
            <img
              src={PolitietLogo}
              alt="Politiet - Logo"
              className="object-contain w-[16rem] mb-5"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
