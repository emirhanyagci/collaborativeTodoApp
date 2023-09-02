import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// supabase
//   .channel("custom-all-channel")
//   .on(
//     "postgres_changes",
//     { event: "*", schema: "public", table: "todos" },
//     (payload) => {
//       console.log("Change received!", payload);
//     }
//   )
//   .subscribe();

export default supabase;
