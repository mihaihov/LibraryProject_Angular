import { Book } from "./Book";
import { IBookRepository } from "./IBookRepostiory";
import { MockAuthorRepository } from "./MockAuthorRepository";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})
export class MockBookRepository implements IBookRepository
{
        public _allBooks : Book[] = [];

    constructor(private _authorRepository : MockAuthorRepository){}
        AllBooksObs(): Observable<Book[]> {
                throw new Error("Method not implemented.");
        }


    AllBooks(): Book[] {
        this._allBooks.push( {Id : 1, Title : "Animal Farm", ImageUrl : "https://m.media-amazon.com/images/I/41EorocZJaL.jpg",
                            Cathegory : "Political", PublicationYear:2022, CopiesAvailable : 15, Description : "A farm is taken over by its overworked, mistreated animals. With flaming Idealism and stirring slogans, they embark on the creation of a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned -- a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published fifty years ago, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner; the cutting clarity and savage comedy of George Orwell's masterpiece have a meaning and message still ferociously fresh.",
                            IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(1)},
                {Id : 2, Title : "The Graphical Novel", ImageUrl : "https://m.media-amazon.com/images/I/41gYZQ5LPKL._SY346_.jpg",
                        Cathegory : "Political", PublicationYear:2021, CopiesAvailable : 10, Description : "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbIdden love affair, Winston finds the courage to join a secret revolutionary organization called the Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(1)},
                {Id : 3, Title : "Down And Out In Paris And London", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/41NOGZEeZvL._SX329_BO1,204,203,200_.jpg",
                        Cathegory : "Political", PublicationYear:1972, CopiesAvailable : 35, Description : "Famous for its realistic and unsentimental description of poverty, Down and Out in London and Paris follows the adventures of a penniless British writer who finds himself rapIdly descending into the seedy heart of two great European capitals. As a dishwasher in Paris, he describes in vivId detail the horrors of what goes on behind the scenes in the kitchens of posh French restaurants. In London, he encounters the disturbing world of the unhoused and charitable shelters. His adventures conniving landlords and negotiating with pawnshops as he searches for work, food, and lodging are told without self-pity and often with humor. ",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(1)},
                {Id : 4, Title : "A Brief History of Time", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/51+GySc8ExL._SX333_BO1,204,203,200_.jpg",
                        Cathegory : "Science", PublicationYear:1966, CopiesAvailable : 21, Description : "A Brief History of Time, published in 1988, was a landmark volume in science writing and in world-wIde acclaim and popularity, with more than 9 million copies in print globally. The original edition was on the cutting edge of what was then known about the origins and nature of the universe. But the ensuing years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic world--observations that have confirmed many of Hawking's theoretical predictions in the first edition of his book.",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(2)},
                {Id : 5, Title : "Brief Answers to the Big Questions", ImageUrl : "https://m.media-amazon.com/images/I/510m74miiaL.jpg",
                        Cathegory : "Science", PublicationYear:2018, CopiesAvailable : 15, Description : "Hawking not only unraveled some of the universe’s greatest mysteries but also believed science plays a critical role in fixing problems here on Earth. Now, as we face immense challenges on our planet—including climate change, the threat of nuclear war, and the development of artificial intelligence—he turns his attention to the most urgent issues facing us.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(2)},
                {Id : 6, Title : "The Origin and Fate of the Universe", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/61fsqBPO8EL._SX379_BO1,204,203,200_.jpg",
                        Cathegory : "Science", PublicationYear:2006, CopiesAvailable : 49, Description : "This book approaches that. In The Theory of Everything, Hawking presents a series of seven lectures in which he lays out, perhaps more clearly and concisely than ever, the history of the universe as we know it. These essays capture not only the brilliance of Hawking’s mind but his characteristic wit as well.",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(2)},
                {Id : 7, Title : "The Grand Design", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/51P7-SvOA1L._SX331_BO1,204,203,200_.jpg",
                        Cathegory : "Science", PublicationYear:2010, CopiesAvailable : 6, Description : "When and how dId the universe begin? Why are we here? What is the nature of reality? Is the apparent “grand design” of our universe evIdence of a benevolent creator who set things in motion—or does science offer another explanation? In this startling and lavishly illustrated book, Stephen Hawking and Leonard Mlodinow present the most recent scientific thinking about these and other abIding mysteries of the universe, in nontechnical language marked by brilliance and simplicity.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(2)},
                {Id : 8, Title : "Black Holes and Baby Universes", ImageUrl : "https://m.media-amazon.com/images/I/51gAIhg5+tL.jpg",
                        Cathegory : "Science", PublicationYear:2011, CopiesAvailable : 35, Description : "In his phenomenal bestseller A Brief History of Time, Stephen Hawking literally transformed the way we think about physics, the universe, reality itself. In these thirteen essays and one remarkable extended interview, the man wIdely regarded as the most brilliant theoretical physicist since Einstein returns to reveal an amazing array of possibilities for understanding our universe.",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(2)},
                {Id : 9, Title : "A Heartbreaking Work of Staggering Genius", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/51em6Mq-+gL._SX320_BO1,204,203,200_.jpg",
                        Cathegory : "Fantasy", PublicationYear:2001, CopiesAvailable : 10, Description : "A book that redefines both family and narrative for the twenty-first century. A Heartbreaking Work of Staggering Genius is the moving memoir of a college senior who, in the space of five weeks, loses both of his parents to cancer and inherits his eight-year-old brother. Here is an exhilarating debut that manages to be simultaneously hilarious and wildly inventive as well as a deeply heartfelt story of the love that holds a family together.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(3)},
                {Id : 10, Title : "The Every", ImageUrl : "https://m.media-amazon.com/images/I/41In4GGyX-L.jpg",
                        Cathegory : "Fantasy", PublicationYear:2021, CopiesAvailable : 5, Description : "Delaney Wells is an unlikely new hire at the Every. A former forest ranger and unwavering tech skeptic, she charms her way into an entry-level job with one goal in mind: to take down the company from within. With her compatriot, the not-at-all-ambitious Wes Makazian, they look for the Every's weaknesses, hoping to free humanity from all-encompassing surveillance and the emoji-driven infantilization of the species. But does anyone want what Delaney is fighting to save? Does humanity truly want to be free?",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(3)},
                {Id : 11, Title : "The Circle", ImageUrl : "https://m.media-amazon.com/images/I/41sZG0+02pL.jpg",
                        Cathegory : "Fantasy", PublicationYear:2013, CopiesAvailable : 125, Description : "When Mae Holland is hired to work for the Circle, the world’s most powerful internet company, she feels she’s been given the opportunity of a lifetime. The Circle, run out of a sprawling California campus, links users’ personal emails, social media, banking, and purchasing with their universal operating system, resulting in one online Identity and a new age of civility and transparency.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(3)},
                {Id : 12, Title : "A Long Way Gone: Memoirs of a Boy Soldier", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/41F3OLVtknL._SX330_BO1,204,203,200_.jpg",
                        Cathegory : "Mystery", PublicationYear:2008, CopiesAvailable : 22, Description : "This is how wars are fought now: by children, hopped-up on drugs and wielding AK-47s. Children have become soldiers of choice. In the more than fifty conflicts going on worldwIde, it is estimated that there are some 300,000 child soldiers. Ishmael Beah used to be one of them.",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(4)},
                {Id : 13, Title : "Little Family: A Novel", ImageUrl : "https://m.media-amazon.com/images/I/41kDuUTI3nS.jpg",
                        Cathegory : "Mystery", PublicationYear:2020, CopiesAvailable : 12, Description : "HIdden away from a harsh outsIde world, five young people have improvised a home in an abandoned airplane, a relic of their country’s tumultuous past. Elimane, the bookworm, is as street-smart as he is wise. Clever Khoudiemata maneuvers to keep the younger kIds—athletic, pragmatic Ndevui, thoughtful Kpindi, and especially their newest member, Namsa—safe and fed. When Elimane makes himself of service to the shadowy William Handkerchief, it seems as if the little family may be able to keep the world at bay and their household intact. But when Khoudi comes under the spell of the “beautiful people”—the fortunate sons and daughters of the elite—the desire to resume an interrupted coming of age and follow her own destiny proves impossible to resist.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(4) },
                {Id : 14, Title : "Radiance of Tomorrow", ImageUrl : "https://m.media-amazon.com/images/I/61yci-vwZZL.jpg",
                        Cathegory : "Mystery", PublicationYear:2014, CopiesAvailable : 115, Description : "When Ishmael Beah's A Long Way Gone was published in 2007, it soared to the top of bestseller lists, becoming an instant classic: a harrowing account of Sierra Leone's civil war and the fate of child soldiers that everyone in the world should read (The Washington Post). Now Beah, whom Dave Eggers has called arguably the most read African writer in contemporary literature, has returned with his first novel, an affecting, tender parable about postwar life in Sierra Leone.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(4)},
                {Id : 15, Title : "Dune", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/41rxoi1jMQL._SX331_BO1,204,203,200_.jpg",
                        Cathegory : "Sci-Fi", PublicationYear:2005, CopiesAvailable : 151, Description : "Set on the desert planet Arrakis, Dune is the story of the boy Paul AtreIdes, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....",
                        IsBookOfTheMonth : true, Author : this._authorRepository.GetAuthorById(5)},
                {Id : 16, Title : "The Godmakers", ImageUrl : "https://m.media-amazon.com/images/I/513q8WrodtL.jpg",
                        Cathegory : "Sci-Fi", PublicationYear:2013, CopiesAvailable : 18, Description : "It’s been centuries since the devastating Rim Wars separated numerous planets from the protection and control of the galactic empire. The Rediscovery and Reeducation Service is dedicated to finding these “lost planets” and returning them to the fold. But not all civilizations are eager to cooperate.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(5)},
                {Id : 17, Title : "Children of Dune", ImageUrl : "https://m.media-amazon.com/images/I/41BajT0B3UL.jpg",
                        Cathegory : "Sci-Fi", PublicationYear:2008, CopiesAvailable : 29, Description : "The Children of Dune are twin siblings Leto and Ghanima AtreIdes, whose father, the Emperor Paul Muad’Dib, disappeared in the desert wastelands of Arrakis nine years ago. Like their father, the twins possess supernormal abilities—making them valuable to their manipulative aunt Alia, who rules the Empire in the name of House AtreIdes.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(5)},
                {Id : 18, Title : "Me Talk Pretty One Day", ImageUrl : "https://images-na.ssl-images-amazon.com/images/I/41vqdc6Q21L._SX331_BO1,204,203,200_.jpg",
                        Cathegory : "Romance", PublicationYear:2001, CopiesAvailable : 39, Description : "A recent transplant to Paris, humorist DavId Sedaris, bestselling author of Naked, presents a collection of his strongest work yet, including the title story about his hilarious attempt to learn French. A number one national bestseller now in paperback.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(6)},
                {Id : 19, Title : "Happy-Go-Lucky", ImageUrl : "https://m.media-amazon.com/images/I/41LcA4hm+aL.jpg",
                        Cathegory : "Romance", PublicationYear:2022, CopiesAvailable : 45, Description : "Back when restaurant menus were still printed on paper, and wearing a mask—or not—was a decision made mostly on Halloween, DavId Sedaris spent his time doing normal things. As Happy-Go-Lucky opens, he is learning to shoot guns with his sister, visiting muddy flea markets in Serbia, buying gummy worms to feed to ants, and telling his nonagenarian father wheelchair jokes.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(6)},
                {Id : 20, Title : "The Best of Me", ImageUrl : "https://m.media-amazon.com/images/I/41laR4e-mVL.jpg",
                        Cathegory : "Romance", PublicationYear:2020, CopiesAvailable : 81, Description : "For more than twenty-five years, DavId Sedaris has been carving out a unique literary space, virtually creating his own genre. A Sedaris story may seem confessional, but is also highly attuned to the world outsIde. It opens our eyes to what is at absurd and moving about our daily existence. And it is almost impossible to read without laughing.",
                        IsBookOfTheMonth : false, Author : this._authorRepository.GetAuthorById(6)});
        return this._allBooks;
    }
    BooksOfTheMonth(): Book[] {
        if(this._allBooks.length < 1)  this.AllBooks();
        return this._allBooks.filter(b => {return b.IsBookOfTheMonth == true});
    }
    GetBookById(id : number): Book {
        if(this._allBooks.length < 1)  this.AllBooks();
        return this._allBooks.filter(b => {return b.Id == id})[0];
    }
    
}