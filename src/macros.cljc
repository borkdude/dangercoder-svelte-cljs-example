(ns macros)

#_(defn js** [[k v]]
  `(js* (format "$: %s = ~{}" (symbol ~k) ~v)))

(defmacro defreactive [name init]
  `(js* "$: ~{} = ~{}" ~name ~init))
