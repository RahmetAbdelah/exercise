

      mermaid
   graph TD;
       A[Start Program] --> B[Initialize Arrays and Variables];
       B --> C[Display Menu];
       C --> D[Get User Choice];
       D --> E{Is Choice Valid?};
       E -->|No| F[Display Invalid Choice Message];
       F --> C;
       E -->|Yes| G{Is Choice = 5?};
       G -->|Yes| H[Exit Program];
       G -->|No| I{Is Choice = 1 or 2?};
       I -->|Yes| J[Set Section Based on Choice];
       J --> K[Get User Name];
       K --> L{Is Name Valid?};
       L -->|No| M[Display Name Error];
       M --> K;
       L -->|Yes| N[Get Preferred Genre];
       N --> O{Is Genre Valid?};
       O -->|No| P[Display Genre Error];
       P --> N;
       O -->|Yes| Q[Get User Age];
       Q --> R{Is Age Valid?};
       R -->|No| S[Display Age Error];
       S --> Q;
       R -->|Yes| T{Are Seats Available in Chosen Section?};
       T -->|Yes| U[Assign First Available Seat];
       T -->|No| V{Check Other Section};
       V --> W{Is Other Section Available?};
       W -->|No| X[Display No Seats Available];
       X --> C;
       W -->|Yes| Y[Ask User to Switch Section];
       Y --> Z{Does User Accept?};
       Z -->|No| AA[Return to Menu];
       Z -->|Yes| AB[Assign Seat in Other Section];
       U --> AC[Save Reservation Details];
       AB --> AC;
       AC --> AD[Display Confirmation];
       AD --> C;
      

