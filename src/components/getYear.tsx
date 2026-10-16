async function getRenderedAt() {
  'use cache'
  return new Date().getFullYear()
}


export function GetYear() {
  return (
    <>
      {getRenderedAt()}
    </>
  )
}