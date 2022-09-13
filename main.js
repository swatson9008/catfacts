


// cat names

const AbyssinianC = ["The Abyssinian is the Energizer Bunny of felines.", "These cats have longevity.", "They’re the clowns of the cat kingdom"];
const ASC = ["American Shorthair has thick, dense coat that is available in more than 60 colors and various patterns.", "American Shorthair is an easy-going, calm and intelligent cat that is suitable for families with children and other cats and cat-friendly dogs.", "American Shorthair has an average lifespan of 15 to 20 years."];
const BengalC = [" Bengal cats were called Safari Cats until the 1970s when their name was changed to reflect the Asian Leopard cat’s scientific name, which is Prionailurus bengalensis.", "Bengal cats don’t have your typical meow. They make a raspy noise that can sound more like a bark.", "These cats have very agile paws and have been known to flip light switches on and off."];
const HimalayanC = ["In 2012, a Himalayan named Colonel Meow set the Guinness record for the cat with the longest hair.", "Himalayans love children and are known to become very attached to their human family members.","At just 2.75 inches tall and 7.5 inches long, the world’s smallest cat was a Himalayan named Tinkertoy."];
const MaineCC = ["Maine coons have a lovely temperament", "Maine coons are a playful breed","Maine coon cats frequently carry the gene for extra toes"];
const ManxC = ["Being a tailless cat, it may come as a surprise that the lack of a tail does not affect their balance whatsoever.", "These cats can have practically any eye color that’s possible in the feline world.", "Due to their strong, slightly taller hind legs, many Manx will move about with an almost rabbit-like bounce."];
const NFC = ["They're Norway's national cat.", "Norwegian forest cats have built-in winter clothes.", "Norwegian forest cats are great at climbing trees."];
const PC = ["The World’s Largest Cat Painting Features Persian Cats", "Persian Cats Haven’t Always Had Flat Faces", "Persian Cats Are Pretty High Maintenance"];
const RagamuffinC = ["Ragamuffin kittens are actually born white and develop a color pattern as they mature.", "The breed can be prone to a condition known as heterochromia, meaning they have two different colored eyes", "It can take four years for these full-sized felines to reach complete physical maturity"];
const RagdollC = ["The first ragdoll cat was registered in 1966.", "They are called ragdolls because they are floppy.","Ragdoll hair doesn't usually get matted"];
const RBC = ["Russian Blue cats have a slightly upturned mouth, giving them subtle smile similar to Mona Lisa’s famous smile.", "Russian Blues are blue because of a diluted gene. The gene responsible for their blue-gray coloring is actually a form of the black-hair gene.","Some Russian Blues are born with ghost stripes. These are faint tabby markings that disappear as the kitties mature."];
const SFC = ["The fold is due to a mutation.", "They’re born with straight ears.", "They sit like humans."];
const SiameseC = ["Siamese cats typically have less acute vision compared to other cat breeds.", "This cat breed is also more vulnerable to respiratory diseases due to the shape of their heads.", "This cat breed is the oldest breed of house cats in the world."];
const SphynxC = ["Sphynx Cats Can Get Sunburn", "Sphynx Cats Need Regular Baths", "Owning a Sphynx Cat is an Expensive Affair"];
const TAC = ["Turkish Angora likes water and it is an excellent swimmer.", "Turkish Angora is very intelligent and highly agile cat that can easily climb to the highest point in the house and even open the doors.", "Turkish Angora is named after the city of its origin - Angora."];
const TVC = ["Turkish Van has long, cashmere-like, single coat that is waterproof.", "Turkish Van has pink nose that changes color to red when cat becomes angry.", "Turkish Van is strong and agile, but clumsy cat which doesn't always land on its feet."];

// functions

let AbyssFacts = AbyssinianC[Math.floor(Math.random() * AbyssinianC.length)];
console.log(show);


// cat submit box

document.querySelectorAll("submit").addEventListner("click", catfact);

function catfact (catname) {

    switch(catname) {
        case "Abyssinian":
        catname = AbyssFacts
        console.log(show)
        break;
    }

}