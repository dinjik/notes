---
icon: TiArticle
---
```bash
# defining directory
directory = " "

# define the flag
flag = "flag-thm.script"

echo "Flag search in directory: $directory in progress"

# define for loop to iterate over all the files with .log extension
for file in $directory/*.log; do
    # check if the file contains flag
    if grep -q "$flag" "$file"; then
    # print the name
    echo "Flag found in: $(basename "$file")"
    fi
done
```