import { Timeline } from "./ui/timeline";

export function Education() {
  const data = [
    {
      title: "April 2019",
      content: (
        <div>
          <h1 className="font-montaga text-[1.7rem] md:text-5xl mb-4">
            PhD
          </h1>
          <h2 className="font-montaga text-lg md:text-2xl mb-4">
          Hindusthan Institute of Science and Technology Chennai
          </h2>
          <ul className="list-disc list-inside">
            <li className="font-montaga text-sm md:text-lg text-white">
                Image Processing, 30 April 2019
            </li>
            <li className="font-montaga text-sm md:text-lg">
            2 SCIE indexed Journals
            </li>
            <li className="font-montaga text-sm md:text-lg">
            2 Scopus Indexed Journals
            </li>
            <li className="font-montaga text-sm md:text-lg">
            1 International IEEE Conferences
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2010-2012",
      content: (
        <div>
          <h1 className="font-montaga text-[1.7rem] md:text-5xl mb-4">
          MTech
          </h1>
          <h2 className="font-montaga text-lg md:text-2xl mb-4">
          Anna University Chennai
          </h2>
          <ul className="list-disc list-inside">
            <li className="font-montaga text-sm md:text-lg text-white">
            Applied Electronics, 2010-2012
            </li>
            <li className="font-montaga text-sm md:text-lg">
            2 National Conference Papers
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2002-2006",
      content: (
        <div>
        <h1 className="font-montaga text-[1.7rem] md:text-5xl mb-4">
        BTech
        </h1>
        <h2 className="font-montaga text-lg md:text-2xl mb-4">
        MGU Kottayam
        </h2>
        <ul className="list-disc list-inside">
          <li className="font-montaga text-sm md:text-lg text-white">
          Electronics and Communication Engineering
          </li>
        </ul>
      </div>
      ),
    },
  ];
  return (
    <div id='education' className="w-full">
      <Timeline data={data} />
    </div>
  );
}
