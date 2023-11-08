Background color: #333333

Övrigt:
Ska man kunna trycka på hela inlägget för att öppna bloginlägget som detalj?

Structure:
1. full-page : height, width, center things on the page with flex
2. blog-container - width, can remove?
3. content-box : background color, width of the box etc
4. blog-content -display flex in the direction you want


- Done:
KLAR Navbar
KLAR Footer
KLAR Main page with blog posts
KLAR About me - info about me
         - form to contact me
Page for individual posts
        - KLAR display by id
        - KLAR buttons for likes/dislikes increment
        - comments
        - Functionality to add comments



- Todo:
Page for individual posts
Create new posts

Bloggsidan skall minst innehålla:
Blogginlägget (som du har tryckt på från huvudsidan)
Du kommer in på denna sida genom huvudsidan
Här visas all information som finns (se blogginlägg struktur nedanför)
Kommentarer
Visa upp alla kommentarer (anonyma, de visar inte vem som har skapat dem)
Ett valfritt sätt att lägga till nya kommentarer (anonyma)
En knapp/länk för att navigera tillbaka till huvudsidan

Ägarens perspektiv innehåller allt som användaren har, men har en till vy:
En till vy för att skapa nya inlägg på valfritt sätt.

Blogginlägg
Alla blogginlägg har följande struktur (men du får gärna lägga till fler saker):

{
  id: number
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}
De skall sparas i localStorage för att du skall kunna ladda om Appen utan att tappa bort dem. Implementera detta på valfritt sätt.

Övrig information
Det finns ingen "inloggning" och inga användare även om det finns ett användarperspektiv
Lägg gärna till fler saker i Appen
När man är inne på användarens perspektiv så ser man inget ifrån ägarens perspektiv.