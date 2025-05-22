erDiagram
    PASSENGER {
        int PassengerID PK "Primary Key"
        varchar Name
        varchar Email "Unique"
        varchar Phone
    }
    ADMIN {
        int AdminID PK "Primary Key"
        varchar Name
        varchar Email "Unique"
    }
    FLIGHT {
        int FlightID PK "Primary Key"
        varchar FlightNumber "Unique"
        varchar Departure
        varchar Destination
        varchar Airline
        int AdminID FK "Foreign Key"
    }
    BOOKING {
        int BookingID PK "Primary Key"
        int PassengerID FK "Foreign Key"
        int FlightID FK "Foreign Key"
        varchar SeatNumber
        datetime BookingDate
    }

    ADMIN ||--o{ FLIGHT : "manages"
    PASSENGER ||--o{ BOOKING : "books"
    FLIGHT ||--o{ BOOKING : "has"

    %% Unique constraints as notes (Mermaid ER does not directly support unique keys on multiple columns)
    note right of BOOKING
      UNIQUE(FlightID, SeatNumber)
    end note


