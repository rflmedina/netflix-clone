import React, { useRef } from "react"
import { useNavigate } from 'react-router-dom'
import Title from "~/components/atoms/Title"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import Button from  "~/components/atoms/Button"
import { Category, CategoryList } from "./styles"

interface ListInterface {
  moviesImg: any[]
  title: string
}

const List = ({ moviesImg, title }: ListInterface) => {
  const navigate = useNavigate()
  const listaRef = useRef<HTMLDivElement>(null)

  function scroll(x: number) {
    listaRef.current && listaRef.current.scrollBy({
      left: x,
      behavior: 'smooth',
    })
  }

  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }

  return (
    <Category>
      <Title>{title}</Title>
      <CategoryList
        ref={listaRef}
      >
        <Button
          className='botao-lista categoria-esquerda'
          onClick={() => scroll(-300)}
        >
          <MdOutlineArrowBackIosNew className='icone' size={35} />
        </Button>
        {
          moviesImg.map((movieImg, index) => {
            return <img 
            key={`${index}-img`} 
            src={movieImg.poster_path + ''} 
            alt={`${index}`}
            onClick={() => sendToMovie(movieImg.id)} />
          })
        }
        <Button
          className='botao-lista categoria-direita'
          onClick={() => scroll(300)}
        >
          <MdOutlineArrowForwardIos className='icone' size={35} />
        </Button>
      </CategoryList>
    </Category>
  )
}

export default List