import Home from "./components/home/home";
import InvoiceForm from "./services/InvoiceForm";

export default function AppHome() {
  return (
    <div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="images/favicon.png" type=""></link>

        <title> Blue Bucket </title>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css"></link>

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        ></link>

        <link href="css/font-awesome.min.css" rel="stylesheet"></link>

        <link href="css/style.css" rel="stylesheet"></link>
        <link href="css/responsive.css" rel="stylesheet"></link>
      </head>
      <body>
        <Home />
      </body>
    </div>
  );
}
