import SmlDocument from "./../src/sml/SmlDocument";

describe("SmlDocument", () => {

    const smlExamples = [
        {
            title: "Configuration files (e.g. Game.cfg)",
            sml: `Configuration
                Video
                    Resolution 1280 720
                    RefreshRate 60
                    Fullscreen true
                End
                Audio
                    Volume 100
                    Music 80
                End
                Player
                    Name "Hero 123"
                End
            End`
        },
        {
            title: "Make / project",
            sml: `Make
                Type Executable
                OutputName Test
                OutputDir d:\MyProjects\Test
                SourceFiles
                    File MyClass.cs
                    File Folder\MyClassB.cs
                    File Program.cs
                End
            End`
        },
        {
            title: "Manifest / meta data",
            sml: `manifest
                package com.example.myapp
                application
                    allowBackup true
                    icon @mipmap/ic_launcher
                    label "My App"
                    theme true
                end
                uses-features
                    feature hardware.sensor.compass
                    feature hardware.bluetooth
                    feature hardware.camera
                end
            end`
        },
        {
            title: "UI layout",
            sml: `LinearLayout
                LayoutWidth MatchParent
                LayoutHeight MatchParent
                Orientation Vertical
                Children
                    TextView
                        ID @+id/text
                        Text "Hello World"
                    End
                    Button
                        Text Button
                    End
                End
            End`
        },
        {
            title: "2D file formats",
            sml: `canvas
                size 300 200
                background-color light-gray
                rect
                    size 120 80
                    position 10 10
                    brush solid 0 255 0
                end
                lines
                    points 30 45  60 40  30 20
                    color red
                end
            end`
        },
        {
            title: "3D file formats",
            sml: `3DOBJ
                VPOS 0.5 0 0  0 1 0  -0.5 0 0
                VNORMAL 0 0 1  0 0 1  0 0 1
                VTEX0 0 0  0.5 1  1 0
                TRIS 0 1 2
                MATERIAL
                    DIF 10 0 255
                    MAP /Users/user/Desktop/Media/Texture.png
                END
            END`
        },
        {
            title: "GPS data files",
            sml: `GPSData
                MetaData
                    Author James
                    Description "My favorite routes"
                End
                Route
                    Name "Route 1"
                    Waypoints
                        Waypoint -43.3081 171.7652 "Waypoint A"
                        Waypoint -43.2773 171.7552 "Waypoint B"
                        Waypoint -43.2588 171.7705 "Waypoint C"
                    End
                End
            End`
        },
        {
            title: "Styling",
            sml: `styles
                style
                    id RedText
                    font-family "Times New Roman" Times serif
                    font-size 40 px
                    border-style dotted dashed solid double
                    border-radius 5 px
                    color rgba 255 10 10 50
                end
            end`
        },
        {
            title: "Playlists",
            sml: `Playlist
                Title "My favorite music"
                Image QSBiZWF1dGlmdWwgaW1hZ2U=
                Tracks
                    Track Song1 /storage/sdcard0/Music/Song1.ogg
                    Track Song2 /storage/sdcard0/Music/Rock.ogg
                    Track Song3 https://www.example.com/Pop.ogg
                End
            End`
        },
        {
            title: "Video editing",
            sml: `Movie
                Title "Last winter"
                Files
                    File Clip1 e:\MyRecordings\Clip1.mp4
                    File Clip2 e:\MyRecordings\Clip2.mp4
                    File Song e:\Music\AmbientMusic.ogg
                End  
                Tracks
                    VideoTrack
                        Clip 0.0 Clip1
                        Clip 117.13 Clip2
                    End
                End
            End`
        },
        {
            title: "Music",
            sml: `Sequence
                Title "My song"
                BPM 60
                TicksPerBeat 2
                A4 440
                Notation SPN
                TimeSignature 3 4
                Notes
                    Note C4 0 2
                    Note E4 2 1
                    Note E4 3 1
                    Note G4 4 2
                End
            End`
        },
        {
            title: "Graphs",
            sml: `graph
                node node-1
                node node-2
                node node-3
                node node-4
                edge node-1 node-2
                edge node-2 node-3
                edge node-3 node-4
                edge node-2 node-4
            end`
        },
        {
            title: "Bibliographic references",
            sml: `BibliographicItems
                Book
                    ID Miller+Davis04
                    Title "Beautiful Canada"
                    Authors
                        Author "James E." Miller
                        Author Victoria Davis
                    End
                    Publisher "Miller Publishing" 
                    Year 2004
                End
            End`
        },
        {
            title: "Text",
            sml: `Article
                Title "Scientific Article"
                Date 2021-01-02
                Document
                    Section
                        Title Introduction
                        Paragraph "The \bf{first} <i>paragraph</i>."
                        Figure F1 Image.jpg "Figure caption"
                        Paragraph "See also \cite{Miller+Davis04}"
                    End
                End
            End`
        },
        {
            title: "Recipes",
            sml: `recipe
                title "Bosten Baked Beans"
                ingredients
                    ingredient 2 cups "navy beans" 
                    ingredient ½ pound bacon
                end
                steps
                    step "Soak beans overnight in water"
                end
            end`
        },
        {
            title: "Financial reporting",
            sml: `FinancialStatements
                Unit USD ISO4217:USD
                BalanceSheet
                    Entity "My Company"
                    Date 2020-12-31
                    Assets
                        NonCurrent
                            PropertyPlantEquipment 12050000.00 USD
                            InvestmentProperty 3820000.00 USD
                        End
                    End
                End
            End`
        },
        {
            title: "Online shops",
            sml: `ShoppingCart
                Item
                    Name "AX10 Desktop Processor 5.1 GHz"
                    Quantity 3
                    Price 349.99 USD
                    Gift True
                    GiftMessage 감사합니다
                End
            End`
        },
        {
            title: "Contacts / electronic business cards",
            sml: `Contact
                Name Jacques Bernard Mr.
                Address
                    Type Home
                    HouseNumber 18    
                    Street "Avenue de la Bourdonnais"
                    PostalCode 75007
                    City Paris
                    Country France
                End
                Email
                    Work jacques@bernard-peintures.fr 
                End
                Photo Embedded UGhvdG9PZkphY3F1ZXM=
            End`
        },
        {
            title: "Calendar data exchange",
            sml: `CalendarEntry
                Type Event
                Status Tentative
                Name "Proposal review"
                DateTime
                    StartTime 2021-01-02 14:00
                    EndTime 2021-01-02 15:00
                End
                Organizer "Steve Wilson" steve@mycompany.com
                Description "Agenda:"/"1. Examine"/"2. Discuss"
            End`
        },
        {
            title: "Project management formats",
            sml: `Project
                Name "My project"
                Resources
                    Resource WS William Smith Designer
                    Resource OJ Olivia Jones Developer
                End
                Tasks
                    Task
                        ID Task_DesignLogo
                        Name "Design logo"
                        Duration 2 d
                        AssignedTo WS
                        Dependencies FinishToStart Task_Brainstorm
                    End
                End
            End`
        },
        {
            title: "Localized message example (french)",
            sml: `Message
                De André
                À Jacques
                Horodatage 2021-01-02 15:43
                Texte "Je serai là à 5 heures"
            Fin`
        },
        {
            title: "File list",
            sml: `Files
                IMAGE IMG_0004.jpg
                image "c:\My Files\Image - 001.png"
                Image c:\Misc\GreenBackground.png
                Video d:\Untitled.mp4
                imaGe c:\Photos\DSC_0366.jpg
                video 20210104_163259.mp4
            End`
        }
    ];

    for (const example of smlExamples) {
        it(`SmlDocument.toString() - Example - ${example.title}`,
            () => {
                // when
                const doc = SmlDocument.parse(example.sml);
                // then
                expect(doc.toString()).toBe(example.sml);
            });
    }

    const correctSmlExamples = [
        {
            title: "Empty root element",
            sml: `MyRootElement
            End`
        },
        {
            title: "Case-insensitive 1",
            sml: `MyRootElement
            End`
        },
        {
            title: "Case-insensitive 2",
            sml: `myrootelement
            end`
        },
        {
            title: "Case-insensitive 3",
            sml: `MYROOTELEMENT
            END`
        },
        {
            title: "Root element with one attribute",
            sml: `MyRootElement
                MyFirstAttribute 123
            End`
        },
        {
            title: "Attribute with multiple values → whitespace-separated",
            sml: `MyRootElement
                MyFirstAttribute 123
                MySecondAttribute 10 20 30 40 50
            End`
        },
        {
            title: "Attribute values are always strings",
            sml: `MyRootElement
                MyFirstAttribute "123"
                MySecondAttribute "10" "20" "30" "40" "50"
            End`
        },
        {
            title: "Value with whitespace or special characters → in double quotes",
            sml: `MyRootElement
                MyFirstAttribute 123
                MySecondAttribute 10 20 30 40 50
                MyThirdAttribute "Hello world"
            End`
        },
        {
            title: "Group with elements",
            sml: `MyRootElement
                Group1  
                    MyFirstAttribute 123
                    MySecondAttribute 10 20 30 40 50
                End
                MyThirdAttribute "Hello world"
            End`
        },
        {
            title: "Indentation-insensitive",
            sml: `MyRootElement
            Group1  
            MyFirstAttribute 123
            MySecondAttribute 10 20 30 40 50
            End
            MyThirdAttribute "Hello world"
            End`
        },
        {
            title: "Comments",
            sml: `# My first SML document
            MyRootElement
              #Group1
              #  MyFirstAttribute 123
              #  MySecondAttribute 10 20 30 40 50
              #End
              MyThirdAttribute "Hello world"   # Comment
            End`
        },
        {
            title: "Double-quote in value",
            sml: `MyRootElement
                MyFirstAttribute "Hello ""world""!"
                MySecondAttribute c:\Temp\Readme.txt
            End`
        },
        {
            title: "Hash character in value",
            sml: `MyRootElement
                MyFirstAttribute "# This is not a comment" # This is a comment
            End`
        },
        {
            title: "Null value and empty string",
            sml: `MyRootElement
                MyFirstAttribute "-"
                MySecondAttribute -
                MyThirdAttribute ""
                MyFourthAttribute My-Value-123
            End`
        },
        {
            title: "Multi-line string",
            sml: `MyRootElement
                MyFirstAttribute "Line1"/"Line2"/"Line3"
            End`
        },
        {
            title: "Attributes and elements with identical names",
            sml: `MyRootElement
                MyFirstAttribute 123
                MyFirstAttribute 3456
                MyFirstAttribute 67
                Element1
                End
                Element1
                End
            End`
        },
        {
            title: "Recent files example",
            sml: `RecentFiles
                File c:\Temp\Readme.txt
                File "c:\My Files\Todo.txt"
                File c:\Games\Racer\Config.sml
                File d:\Untitled.txt
            End`
        },
        {
            title: "Localized end keyword 1",
            sml: `契約
            　　個人情報
            　　　　名字　田中
            　　　　名前　蓮
            　　エンド
            　　日付　２０２１－０１－０２
            エンド`
        },
        {
            title: "Localized end keyword 2",
            sml: `Vertragsdaten
                Personendaten
                    Nachname Meier
                    Vorname Hans
                Ende
                Datum 2021-01-02
            Ende`
        },
        {
            title: "Special characters in element and attribute names",
            sml: `"My Root Element"
                "My First Attribute" 123
            End`
        },
        {
            title: "Whitespace-Separated Values - Table-like notation (embedded table with at least 2 columns and the first column not allowing null values)",
            sml: `Actors
                Name          Age  PlaceOfBirth  FavoriteColor  JobTitle
                "John Smith"  33   Vancouver     -
                "Mary Smith"  27   Toronto       Green          Lawyer
            End`
        }
        /*,
        {
            title: "End Keyword - An attribute can have the same name as the end keyword.",
            sml: `Root
                End 12 13
            End`
        },
        {
            title: "End Keyword - The null value is allowed for end keywords.",
            sml: `Root
            -`
        }*/
    ];

    for (const example of correctSmlExamples) {
        it(`SmlDocument.parse() - Correct sml structures - ${example.title}`, () => {
            // when
            const t = () => {
                SmlDocument.parse(example.sml);
            };
            expect(t).not.toThrow();
        });
    }

    const WSVParserErrors = [
        /*{
            error: "String not closed (2, 30)",
            sml: `Root
                FirstAttribute "hello world
            End`
        },
        {
            error: "Invalid double quote after value (2, 20)",
            sml: `Root
                FirstAttribute ab"c
            End`
        },
        {
            error: "Invalid character after string (2, 31)",
            sml: `Root
                FirstAttribute "hello world"a b c
            End`
        },
        {
            error: "Invalid string line break (2, 26)",
            sml: `Root
                FirstAttribute "Line1"/ "Line2"
            End`
        }*/
    ];

    for (const example of WSVParserErrors) {
        it(`SmlDocument.parse() - WSV Parser Errors - ${example.error}`, () => {
            // when
            const t = () => {
                SmlDocument.parse(example.sml);
            };
            expect(t).toThrow(example.error);
        });
    }

    const SMLParserErrors = [
        /*
        {
            error: "End keyword could not be detected (2)",
            sml: `# Only
            # Comments`
        },
        {
            error: "Invalid root element start (1)",
            sml: `Root abc
            End`
        },
        {
            error: "Null value as element name is not allowed (1)",
            sml: `-
            End`
        },
        {
            error: "Null value as element name is not allowed (2)",
            sml: `Root
                -
                End
            End`
        },
        {
            error: "Null value as attribute name is not allowed (2)",
            sml: `Root
                - 123
            End`
        },
        {
            error: 'Element "Root" not closed (3)',
            sml: `Root
                Element
                End`
        },
        {
            error: "Only one root element allowed (3)",
            sml: `Root
            End
            Root2
            End`
        },
        */
        {
            error: "Invalid root element start",
            sml: `End
            End`
        }
    ];

    for (const example of SMLParserErrors) {
        it(`SmlDocument.parse() - Serialization Errors - SML Parser Errors - ${example.error}`, () => {
            // when
            const t = () => {
                SmlDocument.parse(example.sml);
            };
            expect(t).toThrow(example.error);
        });
    }

});
