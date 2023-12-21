import { HomeComp } from "@/components/component/hero";

export default async function Home() {
  return <HomeComp />;
}

// export default async function Home() {
//   const user = await currentUser();

//   return (
//     <div className="h-screen text-black flex flex-col bg-yellow-200">
//       <NavbarComponent route="home" />
//       <main className="flex-col flex h-screen justify-center items-center">
//         <div className="flex flex-row p-4">
//           <h1 className="text-6xl font-bold gap-2 leading-tight cursor-default">
//             <span className="hover:border-b-8 border-blue-500 rounded-xl duration-150">
//               Organize
//             </span>{" "}
//             and{" "}
//             <span className="hover:border-b-8 border-blue-500 rounded-xl duration-150">
//               Share
//             </span>{" "}
//             recipies like never before!
//           </h1>
//           <ButtonGroup>
//             {user ? (
//               <Link href={"/dashboard"}>
//                 <Button>Dashboard</Button>
//               </Link>
//             ) : (
//               <Button variant="solid" color="primary">
//                 <SignUpButton mode="modal" />
//               </Button>
//             )}
//             <Link href="/about">
//               <Button variant="bordered">About</Button>
//             </Link>
//           </ButtonGroup>
//           <Image
//             className="rounded-lg"
//             alt=""
//             width={300}
//             height={250}
//             src="/hero-stock.jpg"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
