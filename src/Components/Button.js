
const Button = ({children}) => {
  return (
    <div className="details rounded-full py-2 px-3 bg-orange-600 text-white cursor-pointer transition-all hover:bg-orange-700">
                {children}
              </div>
  )
}

export default Button