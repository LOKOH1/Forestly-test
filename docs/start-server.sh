#!/bin/bash
#bundle exec jekyll serve --drafts --detach
bundle exec jekyll serve --drafts --host=0 > /dev/null 2>&1 &
#--host 0.0.0.0 --detach --drafts
