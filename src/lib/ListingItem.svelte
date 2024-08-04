<script>
    export let listing;
  </script>
  
  <style>
    .listing {
      border: 1px solid #ddd;
      padding: 1em;
      margin: 1em 0;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
    }
  
    .listing img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
  
    .listing-details {
      margin-top: 1em;
    }
  
    .listing-details h2 {
      margin: 0 0 0.5em;
    }
  
    .listing-details p {
      margin: 0.5em 0;
    }
  </style>
  
  <div class="listing">
    <img src={listing.image} alt={listing.title} />
    <div class="listing-details">
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <p><strong>Price:</strong> ${listing.price}</p>
    </div>
  </div>
  