import Icon from './Icon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-4 px-3 m-4 flex flex-col sm:flex-row gap-y-4 justify-between bg-black text-white shadow-[8px_8px_7px_0px_rgba(245,255,120)]">
      <ul className="flex flex-col text-left">
        <p className="">Fanney Þóra Vilhjálmsdóttir</p>
        <Link
          className="hover:text-[#00B2FF] transition ease-in-out"
          href="mailto:fanney83@gmail.com"
        >
          fanney83@gmail.com
        </Link>
      </ul>
      <div className="flex gap-4 w-100 justify-end">
        <Link href="https://www.linkedin.com/in/fanney-%C3%BE%C3%B3ra-vilhj%C3%A1lmsd%C3%B3ttir-she-her-b03609a/">
          <Icon
            size={45}
            className="hover:fill-[#F85874] hover:-translate-y-1 transition-all ease-in-out "
            icon="LinkedinLogo"
          />
        </Link>
        <Link
          className="bg-transparent"
          href="https://www.instagram.com/fanney83"
        >
          <Icon
            size={45}
            icon="InstagramLogo"
            className="bg-transparent hover:fill-[#F85874]  hover:-translate-y-1 transition-all ease-in-out"
          />
        </Link>
      </div>
    </footer>
  )
}
