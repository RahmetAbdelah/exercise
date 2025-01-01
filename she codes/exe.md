'''mermaid
    A[Start] --> B[Display Welcome Message]
    B --> C[Input: Full Name]
    C --> D{Valid Full Name?}
    D -->|No| E[Display Error: Invalid Name]
    D -->|Yes| F[Save Full Name to seatReservation]
    F --> G[Input: Sex (M/F)]
    G --> H{Valid Sex?}
    H -->|No| I[Display Error: Invalid Sex Input]
    H -->|Yes| J[Save Sex to seatReservation]
    J --> K[Input: Age]
    K --> L[Input: Passport No.]
    L --> M[Input: Selects]
    M --> N[Input: Aircraft Seat]
    N --> O{Reservation Successful?}
    O -->|No| P[Handle Error: Seat Not Available]
    O -->|Yes| Q[Confirm Reservation]
    Q --> R[End]

    E --> C
    I --> G
    P --> R

